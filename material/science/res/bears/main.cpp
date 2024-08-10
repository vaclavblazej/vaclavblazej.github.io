#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;
typedef double ld;
typedef vector<ll> vi;
// push_back insert lower_bound upper_bound erase
#define F(a) for ( ll i = 0; i < (ll)(a); ++i )

ll N;
vi sz,guess_sum,guess_order,color;

void print_strategy(){
    cout<<"strategy sums up the rest and guess_sums:\n";
    F(N){
        cout<<sz[i]<<", guess_sum "<<guess_sum[i]<<" = "<<guess_order[i]<<"*SUM"<<endl;
    }
}

bool is_correct_strategy(){
    F(N)color[i]=0;
    bool good=true;
    while(true){
        // total sum of all the colors
        ll sum=0;
        F(N)sum+=color[i];
        //cout<<"colors ";F(N)cout<<color[i]<<' ';cout<<endl;
        // check for each bear if he is right
        bool bears_win=false;
        F(N){
            ll bear_sum=sum-color[i];
            ll guess=(guess_sum[i]-guess_order[i]*(bear_sum%sz[i])+2*sz[i])%sz[i];
            //cout<<"sum "<<sum<<", neighbors "<<bear_sum<<", size "<<sz[i]<<" -> "<<guess<<" == "<<color[i]<<endl;
            if(guess == color[i]){
                bears_win=true;
                break;
            }
        }
        if(!bears_win){
            //print_strategy();
            //cout<<"bears don't win for colors\n";
            //F(N)cout<<color[i]<<" ";cout<<endl;
            //cout<<string(60,'<')<<endl;
            good=false;
            break;
        }
        // change hat coloring offset
        ll idx=0;
        while(idx<N && color[idx]==sz[idx]-1){
            color[idx]=0;
            ++idx;
        }
        if(idx==N)break;
        color[idx]++;
    }
    return good;
}

int main(int argc, char **argv) {
    ios::sync_with_stdio(0);
    srand(time(NULL));
    cin>>N;
    sz=guess_order=guess_sum=color=vi(N);
    F(N)cin>>sz[i];
    ll cnt=0;
    ll MX=100000;
    while(true){
        F(N)guess_sum[i]=rand()%sz[i];
        F(N)guess_order[i]=(rand()%2)*2-1;
        if(is_correct_strategy())break;
        ++cnt;
        if(cnt%MX==0){
            cout<<"random experiment #"<<cnt<<endl;
        }
    }
    cout<<"correct\n";
    print_strategy();

    return 0;
}

