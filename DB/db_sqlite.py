import sqlite3

connect = sqlite3.connect('DB_Alexis')
cursor = connect.cursor()
cursor.execute('''create tables'''  )


connect.close()
 