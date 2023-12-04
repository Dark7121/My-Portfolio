echo = "BUILD START"

apt-get update
apt-get install -y libsqlite3-dev

pip install --no-cache-dir -r requirements.txt
python3.9 manage.py collectstatic --noinput --clear

echo = "BUILD END"