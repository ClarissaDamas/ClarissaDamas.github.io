import json
import os
import shutil
from jinja2 import Environment, FileSystemLoader

LANGUAGES = ['en', 'pt']
TEMPLATES_DIR = 'templates'
OUTPUT_DIR = 'output'
STATIC_DIR = 'static'

env = Environment(loader=FileSystemLoader(TEMPLATES_DIR))

if os.path.exists(OUTPUT_DIR):
    shutil.rmtree(OUTPUT_DIR)
os.makedirs(OUTPUT_DIR)

for lang in LANGUAGES:
    with open(f'translations/{lang}.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if lang == 'en':
        lang_dir = OUTPUT_DIR
        # No index principal: PT está na subpasta, EN é ele mesmo
        link_en = "index.html"
        link_pt = "pt/index.html"
    else:
        lang_dir = os.path.join(OUTPUT_DIR, lang)
        os.makedirs(lang_dir, exist_ok=True)
        # No index de /pt: EN está um nível acima (../), PT é ele mesmo
        link_en = "../index.html"
        link_pt = "index.html"

    # Copia a pasta static para cada nível
    shutil.copytree(STATIC_DIR, os.path.join(lang_dir, 'static'), dirs_exist_ok=True)
    
    template = env.get_template('index.html')
    html = template.render(
        texts=data,
        projects=data.get('projects', []),
        lang=lang,
        # Passamos os links corrigidos para o template
        nav_en=link_en,
        nav_pt=link_pt,
        title="Back-end Developer | Portfolio"
    )
    
    with open(os.path.join(lang_dir, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(html)

print("ok")