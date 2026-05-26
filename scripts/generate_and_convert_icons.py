import os
from PIL import Image

def process_icons():
    input_dir = r"e:\PROJECTS\Desk_port\resume"
    output_base_dir = r"e:\PROJECTS\Desk_port\public\System\Icons"
    
    sizes = [16, 32, 48, 96, 144]
    
    icons = {
        "github.png": "github",
        "linkedin.png": "linkedin",
        "anomaly_detection.png": "anomaly_detection",
        "federated_hospital_system.png": "federated_hospital_system",
        "getflowdone.png": "getflowdone",
        "rag_shl_recommendation.png": "rag_shl_recommendation",
        "hiring_spree.png": "hiring_spree",
        "crux.png": "crux",
        "lelo_interview.png": "lelo_interview",
        "leetcode.png": "leetcode",
        "main.png": "main"
    }
    
    print("Starting automated icon conversion pipeline...")
    
    for filename, output_name in icons.items():
        input_path = os.path.join(input_dir, filename)
        if not os.path.exists(input_path):
            print(f"Error: Source icon not found at {input_path}")
            continue
            
        print(f"\nProcessing '{filename}' -> '{output_name}'")
        try:
            with Image.open(input_path) as img:
                # Ensure the image is in RGBA to preserve transparency
                if img.mode != "RGBA":
                    img = img.convert("RGBA")
                
                for size in sizes:
                    size_dir = os.path.join(output_base_dir, f"{size}x{size}")
                    os.makedirs(size_dir, exist_ok=True)
                    
                    # Resize using Lanczos resampling
                    resized_img = img.resize((size, size), Image.Resampling.LANCZOS)
                    
                    # Save as PNG
                    png_path = os.path.join(size_dir, f"{output_name}.png")
                    resized_img.save(png_path, "PNG", optimize=True)
                    
                    # Save as WebP
                    webp_path = os.path.join(size_dir, f"{output_name}.webp")
                    resized_img.save(webp_path, "WEBP", quality=100, lossless=True)
                    
                    print(f"  Saved {size}x{size} PNG & WebP to {size_dir}")
        except Exception as e:
            print(f"Error processing {filename}: {e}")
            
    print("\nIcon conversion pipeline completed successfully!")

if __name__ == "__main__":
    process_icons()
