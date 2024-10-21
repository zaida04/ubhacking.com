from PIL import Image
import os

input_folder = './'
output_folder = './'
max_size = (144, 144)  # 9rem * 16px = 144px
quality = 85  # Adjust quality as needed (85 is a good starting point)

os.makedirs(output_folder, exist_ok=True)

for filename in os.listdir(input_folder):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
        filepath = os.path.join(input_folder, filename)
        img = Image.open(filepath)
        
        # Resize image while maintaining aspect ratio
        img.thumbnail(max_size)
        
        # Save optimized image
        output_path = os.path.join(output_folder, filename)
        img.save(output_path, optimize=True, quality=quality)
