#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;
typedef double ld;
typedef vector<ll> vi;
// push_back insert lower_bound upper_bound erase
#define F(a) for ( ll i = 0; i < (ll)(a); ++i )

ll N,P,C;
vector<vi> a;
bool check_row(int r){
    map<ll> s;
    F(N){ s[a[r][i]]++; }
    bool uniq=false;
    F(N)if(s[a[r][i]]==1){uniq=true;break;}
    return uniq || s.size()>=P;
}
bool check_column(int c){
    map<ll> s;
    F(N){ s[a[i][c]]++; }
    bool uniq=false;
    F(N)if(s[a[i][c]]==1){uniq=true;break;}
    return uniq || s.size()>=P;
}
//bool check_

int main(int argc, char **argv) {
    ios::sync_with_stdio(0);
    if(argc<=3){
        cout<<"run: "<<argv[0]<<" <tile size> <p> <colors>";
        return 0;
    }
    N=atoi(argv[1]);
    P=atoi(argv[2]);
    C=atoi(argv[3]);
    a(N,vi(N,0));

    return 0;
}

