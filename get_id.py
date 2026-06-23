import gdown
res = gdown.download_folder("https://drive.google.com/drive/folders/1QjHgMtdU4sXEi1TTh9fkP72oJN5i1feV", quiet=True, use_cookies=False)
print("FILES:", res)
