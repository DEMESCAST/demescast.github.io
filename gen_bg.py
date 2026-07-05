from PIL import Image, ImageDraw, ImageFont
import os

OUT = r"C:\Users\Micro\Desktop\site-demescast"
os.makedirs(OUT, exist_ok=True)

bg = Image.new("RGB", (1920, 1080), (15, 15, 25))
d = ImageDraw.Draw(bg)

try:
    font_large = ImageFont.truetype("arial.ttf", 180)
    font_small = ImageFont.truetype("arial.ttf", 40)
except:
    font_large = ImageFont.load_default()
    font_small = font_large

for i in range(0, 1080, 40):
    alpha = 5 if i % 80 == 0 else 2
    d.rectangle([(0, i), (1920, i+1)], fill=(60, 180, 255, alpha))

d.text((960, 400), "DEMES CAST", fill=(60, 180, 255, 12), font=font_large, anchor="mm")
d.text((960, 900), "TECNOLOGIA & INOVAÇÃO", fill=(255, 255, 255, 8), font=font_small, anchor="mm")

bg.save(os.path.join(OUT, "hero-bg.png"))
print("OK")
