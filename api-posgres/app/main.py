from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import psycopg2
app = FastAPI(
    title="API de Citas",
    description="API para gestionar citas",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://SantaImelda.test",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_CONFIG = {
    "host": "db",
    "database": "santa_imelda",
    "user": "postgres",
    "password": "postgres",
    "port": 5432,
}

class LoginRequest(BaseModel):
    usuario: str
    password: str


class Cita(BaseModel):
    nombre: str
    telefono: str
    fecha_hora_cita: str
    estudio: str
    sucursal: str
    descripcion: str | None = None


@app.get("/")
def root():
    return {
        "mensaje": "API de citas funcionando"
    }


@app.post("/citas")
def crear_cita(cita: Cita):

    try:
        conn = psycopg2.connect(**DB_CONFIG)
        cursor = conn.cursor()

        cursor.execute(
            """
            INSERT INTO citas (
                nombre,
                telefono,
                fecha_hora_cita,
                estudio,
                sucursal,
                descripcion
            )
            VALUES (%s, %s, %s, %s, %s, %s)
            RETURNING id;
            """,
            (
                cita.nombre,
                cita.telefono,
                cita.fecha_hora_cita,
                cita.estudio,
                cita.sucursal,
                cita.descripcion
            )
        )

        id_cita = cursor.fetchone()[0]

        conn.commit()

        cursor.close()
        conn.close()

        return {
            "mensaje": "Cita creada correctamente",
            "id": id_cita
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
        
@app.get("/citas")
def get_citas():
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        cursor = conn.cursor()

        cursor.execute(
            """
            SELECT id, nombre, telefono, fecha_hora_cita, estudio, sucursal, descripcion
            FROM citas;
            """
        )

        citas = cursor.fetchall()

        cursor.close()
        conn.close()

        return [
            {
                "id": cita[0],
                "nombre": cita[1],
                "telefono": cita[2],
                "fecha_hora_cita": cita[3],
                "estudio": cita[4],
                "sucursal": cita[5],
                "descripcion": cita[6]
            }
            for cita in citas
        ]

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

@app.post("/login")
def login(data: LoginRequest):

    try:
        conn = psycopg2.connect(**DB_CONFIG)
        cursor = conn.cursor()

        cursor.execute(
            """
            SELECT id, nombre, usuario, rol
            FROM usuarios
            WHERE usuario = %s
            AND password = %s
            """,
            (data.usuario, data.password)
        )

        user = cursor.fetchone()

        cursor.close()
        conn.close()

        if not user:
            raise HTTPException(
                status_code=401,
                detail="Usuario o contraseña incorrectos"
            )

        return {
            "id": user[0],
            "nombre": user[1],
            "usuario": user[2],
            "rol": user[3]
        }

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )