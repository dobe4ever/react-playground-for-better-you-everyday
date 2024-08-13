###  python backup_sys_file.py

import os

def generate_react_file_paths(root_dir):
    file_paths = []
    exclude_dirs = {
        'node_modules', '.git', 'build', 'dist', '__pycache__',
        '.upm', '.config', '.cache', '.npm', '.replit', '.github'
    }
    include_extensions = {'.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.json', '.html'}
    
    for dirpath, dirnames, filenames in os.walk(root_dir):
        # Remove excluded directories
        dirnames[:] = [d for d in dirnames if d not in exclude_dirs and not d.startswith('.')]
        
        for filename in filenames:
            _, ext = os.path.splitext(filename)
            if ext.lower() in include_extensions:
                file_paths.append(os.path.relpath(os.path.join(dirpath, filename), root_dir))
    
    return file_paths


if __name__ == "__main__":
    project_root = "." 
    paths = generate_react_file_paths(project_root)
    
    # Create the directory if it doesn't exist
    output_dir = os.path.join(project_root, '.unrelated', 'claude_api', 'data')
    os.makedirs(output_dir, exist_ok=True)
    
    # Write the paths to the file
    output_file = os.path.join(output_dir, 'sys_file.md')
    with open(output_file, 'w') as f:
        for path in paths:
            f.write(f"{path}\n")
    
    print(f"File paths have been saved to {output_file}")

