#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;

typedef vector<vector<ll>> graph;
ll N,M;
vector<bool> done;
graph g;

void clear(){
    done=vector<bool>(N,0);
}

ll vertices_dfs(ll e){
    if(done[e])return 0;
    ll res=1;
    done[e]=1;
    for(ll n:g[e]){
        res+=vertices_dfs(n);
    }
    return res;
}

ll edges_dfs(ll e){
    if(done[e])return 0;
    ll res=0;
    done[e]=1;
    for(ll n:g[e]){
        edges_dfs(n);
        res++;
    }
    return res;
}

int main(){
    cin>>N>>M;
    g=graph(N);
    for(int i=0; i<M; ++i){
        ll a,b;cin>>a>>b;
        g[a].push_back(b);
        g[b].push_back(a);
    }
    clear();
    cout<<"Graph has:\n";
    clear();
    cout<<"Vertices: "<<vertices_dfs(0)<<endl;
    clear();
    cout<<"Edges: "<<edges_dfs(0)/2<<endl;
    ll comp=0;
    for(int i=0; i<N; ++i)if(done[i]==0){
        comp++;
        vertices_dfs(0);
    }
    cout<<"Components: "<<comp<<endl;
    return 0;
}

