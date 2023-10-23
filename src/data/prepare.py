import pandas as pd

# Read in the prepared data
df = pd.read_csv("filtered.csv")

# Drop unnecessary columns
df = df.drop(
    columns=[
        "Is Timeline Work",
        "Gallery Number",
        "Department",
        "AccessionYear",
        "Culture",
        "Period",
        "Dynasty",
        "Reign",
        "Portfolio",
        "Constituent ID",
        "Artist Role",
        "Artist Prefix",
        "Artist Display Bio",
        "Artist Suffix",
        "Artist Alpha Sort",
        "Artist Nationality",
        "Artist Begin Date",
        "Artist End Date",
        "Artist Gender",
        "Artist ULAN URL",
        "Artist Wikidata URL",
        "Medium",
        "Dimensions",
        "Credit Line",
        "Excavation",
        "River",
        "Classification",
        "Rights and Reproduction",
        "Link Resource",
        "Object Wikidata URL",
        "Metadata Date",
        "Repository",
        "Tags",
        "Tags AAT URL",
        "Tags Wikidata URL",
        "State",
        "County",
        "Region",
        "Subregion",
        "Locale",
        "Locus",
        "Geography Type",
        "Object Number",
        "Object Name",
    ]
)

# Rename columns to camelCase


# Save to csv
df.to_csv("prepared.csv", index=False)
