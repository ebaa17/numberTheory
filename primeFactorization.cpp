#include <bits/stdc++.h>

#define fast ios_base::sync_with_stdio(false),cin.tie(NULL),cout.tie(NULL);
#define el '\n'
#define ll  long long
#define test int test;cin>>test;while(test--)
using namespace std;


bool isPrime(ll n) {
    if (n == 1)return false;
    for (ll i = 2; i * i <= n; ++i) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;

}

void factorize(ll n){
    map<int,int> factors;
    while(n%2==0){
        factors[2]++;
        n/=2;
    }
    for (int i = 3; i * i <= n; i+=2) {
        while(n%i==0){
            factors[i]++;
            n/=i;
        }
    }
    if(n!=1)factors[n]++;
    int factorscount = 1;
    for (auto fact:factors) {
        if (fact.second>0) factorscount*=(fact.second+1);
        for (int i = 0; i < fact.second; ++i) {
            cout<<fact.first<<' ';
        }
    }
    cout<<"\nnumber of factors: "<<factorscount;

}

int multipliers(double n, double l, double r){
    return floor(r/n) - ceil(l/n) + 1;
}

int trailingZeros(ll n){
    int cnt = 0;
    while(n>0){
        cnt+=n/5;
        n/=5;
    }
    return cnt;
}


int32_t main() {
    fast
    ll n;
    cin>>n;
    factorize(n);
    cout<<"\number of multipliers: "<<multipliers(n,10,100);
    cout<<"Number of trailing zeros in "<< n <<"! is: "<<trailingZeros(n);

    return 0;
}
