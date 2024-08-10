#!/usr/bin/env python3

import sys

import matplotlib.pyplot as plt
import networkx as nx
import itertools as it

G = nx.Graph()
lists = [2,3,6]
explicit_list = list(map(range, lists))
nodes=list(it.product(*explicit_list))
print(nodes)
# G.add_nodes_from(nodes)

for i in range(len(lists)):
    for n in nodes:
        c=n[:max(0,i)]+(-1,)+n[min(i+1,len(lists)):]
        print(n,c)
        G.add_edge(n,c)

# left, right = nx.bipartite.sets(G)
# nx.bipartite.maximum_matching(G)
# list(G)

# nx.write_edgelist(G, path="grid.edgelist", delimiter=":")
# H = nx.read_edgelist(path="grid.edgelist", delimiter=":")

nx.draw(G)
plt.show()

