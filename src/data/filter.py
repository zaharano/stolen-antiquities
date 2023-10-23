# Take the full data dump csv and filter objects based on the following criteria:
# 1. The object is a highlight
# 2. The object is in the public domain
# This will make up the dictionary for final reference.

import pandas as pd

# Read in the full data dump


def filter_data():
    df = pd.read_csv("MetObjects.csv")

    # Filter out rows that don't meet the criteria
    df = df[df["Is Highlight"] == True]
    df = df[df["Is Public Domain"] == True]

    # Drop unnecessary columns
    df = df.drop(columns=["Is Highlight", "Is Public Domain"])

    # Save the filtered data
    df.to_csv("filtered.csv", index=False)


filter_data()
