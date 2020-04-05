import json
import numpy as np
import matplotlib.pyplot as plt

from matplotlib.patches import Circle, Wedge, Polygon
from matplotlib.collections import PatchCollection

with open('kommun.json', 'r') as f:
    kommuns = json.load(f)

xmin = 10e6
xmax = 0
ymin = 10e6
ymax = 0
fig, ax = plt.subplots()
patches = []
colors = []
color = 0
for k in kommuns['features']:
    name = k['properties']['kommunnamn']

    color = color + 1

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
plt.axis('off')
plt.savefig("test.png", bbox_inches='tight')
plt.show()
