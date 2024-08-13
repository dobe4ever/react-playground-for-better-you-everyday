### python backup_code.py

import os
import fnmatch

def generate_markdown_backup(root_dir, output_file):
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("# Codebase\n\n")
        
        # Define the directories and file patterns to include
        include_dirs = [
            'src',
            'public',
            'pages',
            # 'src/App.js',
            # 'src/index.css',
            # 'src/index.js',
            # 'src/components/mainLayout',
            # 'src/components/graphicDesign'
        ]
        
        include_patterns = [
            '*.js', '*.jsx', '*.ts', '*.tsx', '*.css', '*.html'
        ]
        
        # Process specified directories
        for dir_name in include_dirs:
            process_directory(os.path.join(root_dir, dir_name), f, root_dir, include_patterns)
        
        # Process important files in the root directory
        root_files = [
            'tailwind.config.js', 'input.css', 'package.json'
        ]
        for file_name in root_files:
            file_path = os.path.join(root_dir, file_name)
            if os.path.isfile(file_path):
                write_file_content(file_path, f, root_dir)

def process_directory(directory, file_obj, root_dir, patterns):
    for root, _, files in os.walk(directory):
        for file_name in files:
            if any(fnmatch.fnmatch(file_name, pattern) for pattern in patterns):
                file_path = os.path.join(root, file_name)
                write_file_content(file_path, file_obj, root_dir)

def write_file_content(file_path, file_obj, root_dir):
    relative_path = os.path.relpath(file_path, root_dir)
    file_obj.write(f"## {relative_path}\n\n")
    file_obj.write("```\n")
    try:
        with open(file_path, 'r', encoding='utf-8') as content_file:
            file_obj.write(content_file.read())
    except Exception as e:
        file_obj.write(f"Error reading file: {str(e)}")
    file_obj.write("\n```\n\n")

if __name__ == "__main__":
    root_directory = "."  # Assumes the script is run from the project root
    output_file = ".unrelated/claude_api/data/codebase.md"
    generate_markdown_backup(root_directory, output_file)
    print(f"Backup generated: {output_file}")

