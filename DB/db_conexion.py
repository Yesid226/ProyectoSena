from flask import Flask
import mysql.connector

app = Flask(__name__)

# Configura la conexión a la base de datos
db = mysql.connector.connect(
  host="localhost",
  user="root",
  password="natikaw14",
  database="dbcolegio"
)

@app.route("/")
def index():
    # Crea un cursor para interactuar con la base de datos
    cursor = db.cursor()

    # Ejecuta una consulta SQL para obtener todos los registros de una tabla
    cursor.execute("SELECT * FROM usuarios")

    # Recupera los resultados de la consulta
    resultados = cursor.fetchall()

    # Imprime los resultados en la página web
    return str(resultados)

if __name__ == "__main__":
    app.run()
