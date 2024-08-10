#include <bits/stdc++.h>
using namespace std;

int main(){
    for(int i=0; i<100; ++i){
        int val=(5*i+2*(1+(i%3)))%11;
        if(val==7) cout<<i<<" OK"<<endl;
        else cout<<i<<" = "<<val<<endl;
    }
    return 0;
}
