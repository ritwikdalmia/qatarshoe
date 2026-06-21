with open(r"c:\Users\dalmi\OneDrive\Desktop\backup\AlgoGuru Technologies\Clients\frrelancing\2025\qatarshoe clone\shopify_folder\sections\footer.liquid", "r", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "@media" in line:
        print(f"Line {i+1}: {line.strip()}")
