echo = "BUILD START"

curl -O https://www.sqlite.org/2023/sqlite-autoconf-3360000.tar.gz
tar xvfz sqlite-autoconf-3360000.tar.gz
cd sqlite-autoconf-3360000
./configure
make
make install
cd..

yum install -y sqlite-devel

pip install --no-cache-dir -r requirements.txt
python3.9 manage.py collectstatic --noinput --clear

echo = "BUILD END"