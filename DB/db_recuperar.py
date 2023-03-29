import mysql.connector
import smtplib
import random
import string

# Configura la conexión a la base de datos
db = mysql.connector.connect(
    host="3306",
    user="root",
    password="contraseña",
    database="dbcolegio"
)

def recuperar_contraseña():
    Rcorreo = input("Ingrese su correo electrónico: ")
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users WHERE email=%s", (Rcorreo,))
    user = cursor.fetchone()
    if user:
        # Genera una nueva contraseña aleatoria
        nueva_contraseña = ''.join(random.choices(string.ascii_letters + string.digits, k=8))
        password = bcrypt.hashpw(nueva_contraseña.encode('utf-8'), bcrypt.gensalt())
        cursor.execute("UPDATE users SET password=%s WHERE email=%s", (password, Rcorreo))
        db.commit()

        # Envía un correo electrónico al usuario con la nueva contraseña
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login('tu_correo@gmail.com', 'tu_contraseña')
        mensaje = f'Su nueva contraseña es: {nueva_contraseña}'
        server.sendmail('tu_correo@gmail.com', email, mensaje)
        server.quit()

        print("Se ha enviado un correo electrónico con la nueva contraseña.")
    else:
        print("No se encontró ningún usuario con ese correo electrónico.")
