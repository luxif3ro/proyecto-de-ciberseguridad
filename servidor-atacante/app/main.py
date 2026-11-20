from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
from datetime import datetime, timezone
import os

app = FastAPI(title="Servidor de laboratorio")

# =========================================================
# CORS
# =========================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://santaimelda.local",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================================================
# MONGODB
# =========================================================

MONGO_URI = os.getenv(
    "MONGO_URI",
    "mongodb://localhost:27017"
)

MONGO_DB = os.getenv(
    "MONGO_DB",
    "laboratorio"
)

client = MongoClient(MONGO_URI)

db = client[MONGO_DB]

# Colecciones separadas
logins = db["logins_prueba"]
citas = db["citas_prueba"]


# =========================================================
# MODELOS
# =========================================================

class LoginPrueba(BaseModel):
    usuario: str
    password: str


class CitaPrueba(BaseModel):
    nombre: str
    telefono: str
    fecha_hora_cita: str
    estudio: str
    sucursal: str
    descripcion: str | None = None


# =========================================================
# ROOT
# =========================================================

@app.get("/")
def root():
    return {
        "servidor": "laboratorio",
        "estado": "activo"
    }


# =========================================================
# LOGIN DE PRUEBA
# =========================================================

@app.post("/login")
def recibir_login(login: LoginPrueba):

    documento = {
        "usuario": login.usuario,
        "password": login.password,
        "fecha": datetime.now(timezone.utc),
        "tipo": "login_prueba"
    }

    resultado = logins.insert_one(documento)

    return {
        "mensaje": "Login de prueba almacenado",
        "id": str(resultado.inserted_id)
    }


# =========================================================
# CITA DE PRUEBA
# =========================================================

@app.post("/citas")
def recibir_cita(cita: CitaPrueba):

    documento = {
        "nombre": cita.nombre,
        "telefono": cita.telefono,
        "fecha_hora_cita": cita.fecha_hora_cita,
        "estudio": cita.estudio,
        "sucursal": cita.sucursal,
        "descripcion": cita.descripcion,
        "fecha_recepcion": datetime.now(timezone.utc),
        "tipo": "cita_prueba"
    }

    resultado = citas.insert_one(documento)

    return {
        "mensaje": "Cita de prueba almacenada",
        "id": str(resultado.inserted_id)
    }


# =========================================================
# CONSULTAS PARA EL LABORATORIO
# =========================================================

@app.get("/logins")
def obtener_logins():

    resultados = list(logins.find({}, {"_id": 0}))

    return resultados


@app.get("/citas")
def obtener_citas():

    resultados = list(citas.find({}, {"_id": 0}))

    return resultados