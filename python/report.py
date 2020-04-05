import json
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Circle, Wedge, Polygon
from matplotlib.collections import PatchCollection
from collections import Counter
import requests

database_url='https://mytest-f400d.firebaseio.com/'

# Get list of kommuner and kommun data
try:
    r = requests.get(database_url + 'kommun.json')
    kommuns = r.json()
except ConnectionError:
    kommuns = None

if kommuns is not None:
    print "Getting list of kommuns from database"

if kommuns is None:
    with open('kommun.json', 'r') as f:
        kommuns = json.load(f)


# Get responces from database
r = requests.get(database_url + 'responces.json')
responces = r.json()

# Define search criteria
question='temperature'
answer='over38'



locations=[responces[r]['location'] for r in responces if responces[r][question] == answer]
location_histogram = dict(Counter(locations))


xmin = 10e6
xmax = 0
ymin = 10e6
ymax = 0
fig, ax = plt.subplots()
patches = []
colors = []
for k in kommuns['features']:
    name = k['properties']['kommunnamn']

    if name not in location_histogram.keys():
        color = 0
    else:
        color = location_histogram[name]

    for a in k['properties']['kommunyta']['coordinates']:
        for area in a:

            c = np.array(area)

            xmin = min(xmin, c[:,0].min())
            xmax = max(xmax, c[:,0].max())
            ymin = min(ymin, c[:,1].min())
            ymax = max(ymax, c[:,1].max())
            polygon = Polygon(c, True, fill=True)
            patches.append(polygon)
            colors.append(color)


p = PatchCollection(patches)
p.set_array(np.array(colors))
ax.add_collection(p)
ax.set_xlim(xmin,xmax)
ax.set_ylim(ymin,ymax)
ax.set_aspect('equal','datalim')
fig.colorbar(p, ax=ax)
plt.axis('off')
plt.title('Question "%s" got answer "%s"' % (question, answer))
plt.savefig("report.png", bbox_inches='tight')
plt.show()
