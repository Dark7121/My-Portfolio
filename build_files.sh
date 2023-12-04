echo = "BUILD START"

yum install -y sqlite-devel

pip install --no-cache-dir -r requirements.txt
python3.9 manage.py collectstatic --noinput --clear

echo = "BUILD END"