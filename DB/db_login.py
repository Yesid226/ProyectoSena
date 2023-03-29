from flask import Flask, render_template, request, redirect, session
import mysql.connector
import bcrypt

app = Flask(dbcolegio.mysql)
app.secret_key = 'clave-secreta'

# Configura la conexión a la base de datos
db = mysql.connector.connect(
    host="3306",
    user="root",
    password="natikaw14",
    database="dbcolegio"
)

# Ruta de registro de usuarios
@app.route('/registro', methods=['GET', 'POST'])
def registro():
    if request.method == 'POST':
        Rnombre = request.form['Nombres']
        Rapellidos = request.form['Apellidos']
        Rcorreo = request.form['Email']
        Rcedula = request.form['Cédula']
        Rfecha = request.form['Fecha']
        Roll = request.form['Roll']
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        # Verifica que las contraseñas coincidan
        if password != confirm_password:
            return render_template('registro.html', error='Las contraseñas no coinciden')

        # Verifica si el usuario ya existe en la base de datos
        cursor = db.cursor()
        cursor.execute("SELECT * FROM users WHERE username=%s", (Rnombre,))
        user = cursor.fetchone()
        if user:
            return render_template('registro.html', error='El usuario ya existe')

        # Hashea la contraseña y almacena los datos de usuario en la base de datos
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        cursor.execute("INSERT INTO users (username, email, password) VALUES (%s, %s, %s)", (Rnombre, Rapellidos, Rcorreo, Rcedula, Rfecha, Roll, password))
        db.commit()

        # Inicia sesión y redirige al usuario a la página de inicio
        session['username'] = Rnombre
        return redirect('/')

    return render_template('registro.html')

# Ruta de inicio de sesión
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        Rcedula = request.form['Cédula']
        password = request.form['password']

        # Busca el usuario en la base de datos
        cursor = db.cursor()
        cursor.execute("SELECT * FROM users WHERE username=%s", (Rcedula,))
        user = cursor.fetchone()

        # Verifica la contraseña si el usuario existe
        if user:
            if bcrypt.checkpw(password.encode('utf-8'), user[3].encode('utf-8')):
                session['username'] = Rcedula
                return redirect('/')
            else:
                return render_template('login.html', error='Contraseña incorrect')