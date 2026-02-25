import os
import sys
from PIL import Image
import pillow_heif

# Register HEIF opener with Pillow
pillow_heif.register_heif_opener()

def process_file(file_path, max_size_kb=150):
    if not file_path.lower().endswith(".heic"):
        return
        
    max_size_bytes = max_size_kb * 1024
    jpg_path = os.path.splitext(file_path)[0] + ".jpg"
    
    print(f"Processing: {os.path.basename(file_path)} -> {os.path.basename(jpg_path)}")
    
    try:
        # Open HEIC image
        image = Image.open(file_path)
        
        # Original dimensions
        orig_w, orig_h = image.size
        
        # Resize while maintaining aspect ratio if larger than max_dimensions
        if orig_w > orig_h:
            # Landscape
            target_size = (1920, 1080)
        else:
            # Portrait
            target_size = (1080, 1920)
            
        # thumbnail() resizes in-place and preserves aspect ratio
        image.thumbnail(target_size, Image.Resampling.LANCZOS)
        new_w, new_h = image.size
        
        if (orig_w, orig_h) != (new_w, new_h):
            print(f"  Resized from {orig_w}x{orig_h} to {new_w}x{new_h}")
        
        # Compression loop
        quality = 85
        while quality >= 25:
            image.save(jpg_path, "JPEG", quality=quality, optimize=True)
            current_size = os.path.getsize(jpg_path)
            
            if current_size <= max_size_bytes:
                print(f"  Finished: {current_size / 1024:.2f} KB (Quality: {quality})")
                break
            
            quality -= 10
        
        if os.path.getsize(jpg_path) > max_size_bytes:
            print(f"  Warning: {os.path.basename(file_path)} is still {os.path.getsize(jpg_path)/1024:.2f} KB at quality 25.")
            
    except Exception as e:
        print(f"  Error processing {file_path}: {e}")

def compress_heic(path, max_size_kb=150):
    if os.path.isfile(path):
        process_file(path, max_size_kb)
    elif os.path.isdir(path):
        for root, dirs, files in os.walk(path):
            for file in files:
                if file.lower().endswith(".heic"):
                    process_file(os.path.join(root, file), max_size_kb)
    else:
        print(f"Error: Path {path} not found.")

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "src/assets"
    compress_heic(target)
