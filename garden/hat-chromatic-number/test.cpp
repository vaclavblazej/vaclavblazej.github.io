#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;
typedef double ld;
typedef vector<ll> vi;
// push_back insert lower_bound upper_bound erase
#define F(a) for ( ll i = 0; i < (ll)(a); ++i )
#define EPS 1e-12

typedef vector<vector<ll>> table;
bool comp(const vi &a, const vi &b){ // <=
    ll N=min(a.size(),b.size());
    bool smaller=true;
    F(N) if(a[i]>b[i])smaller=false;
    return smaller;
}

ld prob(const vi &v){
    ld s=0;
    for(ll n:v)s+=(1./n);
    return s;
}

table allCandidates(ll n, ll MX){
    table res;
    vi a=vi(n,1);
    while(true){
        ld s=prob(a);
        if(s>1-EPS && s-(1./a.back())<1-EPS){
            res.push_back(a);
        }
        ll idx=n-1;
        while(idx>=0 && a[idx]==MX) --idx;
        if(idx==-1)break;
        a[idx]++;
        for(int i=idx+1; i<n; ++i)a[i]=a[i-1];
    }
    return res;
}

int main(){
    const table all=allCandidates(5, 120);
    table correct_set;
    for(vi v:all){
        //cout<<"---- ";
        //for(ll n:v){ cout<<n<<' '; }
        //cout<<endl;
        //for(vi &c:correct_set){
            ////F(correct_set.size()){
            ////vi &c=correct_set[i];
            //for(ll n:c)cout<<n<<' ';
            //cout<<'['<<(comp(c,v))<<' '<<comp(v,c)<<"] "<<endl;
        //}
        //for(ll n:v)cout<<n<<' ';cout<<endl;
        //cout<<endl;
        bool push=true;
        //for(vi c:correct_set){
        F(correct_set.size()){
            vi &c=correct_set[i];
            if(comp(c,v)){
                swap(correct_set[i],correct_set.back());
                correct_set.pop_back();
                --i;
                continue;
            }
            if(comp(v,c)){ push=false; break; }
        }
        if(push) {
            correct_set.push_back(v);
        }
    }
    //for(vi a:all){
        //for(ll n:a)cout<<n<<' ';cout<<endl;
    //}
    //cout<<comp(correct_set[0],correct_set[1])<<endl;
    //cout<<comp(correct_set[1],correct_set[0])<<endl;
    for(const vi &c:correct_set){
        for(ll n:c)cout<<n<<' ';
        cout<<" -> ";
        ll m=1,t=0;
        for(ll n:c){ m*=n; }
        for(ll n:c){ t+=m/n; }
        cout<<m<<' '<<t<<' '<<(t-m)<<' '<<prob(c)<<endl;
    }
    // frequency of the discrepencies
    //map<ll,ll> histo;
    //for(const vi &c:correct_set){
        //ll m=1,t=0;
        //for(ll n:c){ m*=n; }
        //for(ll n:c){ t+=m/n; }
        //histo[t-m]++;
    //}
    //for(const pair<ll,ll> &p:histo){
        //cout<<p.first<<":"<<p.second<<endl;
    //}
    return 0;
}

