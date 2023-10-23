import pandas as pd

# Read in the full data dump
df = pd.read_csv("filtered.csv")

row_count, column_count = df.shape

print("Number of rows ", row_count)
print("Number of columns ", column_count)
