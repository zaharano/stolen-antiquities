import pandas as pd

# Read prepared data as records
df = pd.read_csv(r"prepared.csv")

# Select 10 random rows
df = df.sample(n=10)

# output to json
df.to_json(r"tenRandom.json", orient="records")
