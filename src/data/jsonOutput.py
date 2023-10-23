import pandas as pd

# Read prepared data as records
df = pd.read_csv(r"prepared.csv")

# output to json
df.to_json(r"jsonOutput.json", orient="records")
