CREATE TABLE citas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    fecha_hora_cita TIMESTAMP NOT NULL,
    estudio VARCHAR(255) NOT NULL,
    sucursal VARCHAR(255) NOT NULL,
    descripcion TEXT
);

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    usuario VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(50) NOT NULL
);

INSERT INTO citas (nombre, telefono, fecha_hora_cita, estudio, sucursal, descripcion) VALUES
('Juan Perez', '555-1234', '2024-07-01 10:00:00', 'Estudio A', 'Sucursal 1', 'Consulta general'),
('Maria Lopez', '555-5678', '2024-07-02 14:30:00', 'Estudio B', 'Sucursal 2', 'Revisión de resultados'),
('Carlos Sanchez', '555-8765', '2024-07-03 09:15:00', 'Estudio C', 'Sucursal 1', 'Examen de laboratorio'),
('Ana Torres', '555-4321', '2024-07-04 11:45:00', 'Estudio A', 'Sucursal 3', 'Consulta de seguimiento'),
('Luis Ramirez', '555-6789', '2024-07-05 13:00:00', 'Estudio B', 'Sucursal 2', 'Prueba de diagnóstico');

INSERT INTO usuarios(nombre,usuario,password,rol) VALUES
('Jorge Ramos','joRam','contraseña123','empleado')