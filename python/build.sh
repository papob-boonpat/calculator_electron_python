 source .vend/bin/activate 
 pyinstaller --onefile --clean --windowed main.py --paths=.vend/lib/python3.9/site-packages --name calculatorDeamon --distpath ../backend
 