
#include <bits/stdc++.h>

#define fast ios_base::sync_with_stdio(false),cin.tie(NULL),cout.tie(NULL);
#define el '\n'
#define ll  long long
#define test int test;cin>>test;while(test--)
using namespace std;

const int N = 1e5+1;
bool notPrime[N];
vector<int> primes;

void sieve(ll n){
    memset(notPrime,false,sizeof(notPrime));
    notPrime[0] = notPrime[1] = true;
    for (int i = 2; i < n; ++i) {
        if(!notPrime[i]){
            primes.push_back(i);
            for (int j = i*2; j < n; j+=i) {
                notPrime[j] = true;
            }
        }
    }
}

int32_t main() {
    fast
    ll n;
    cin>>n;
    sieve(n);
    for (auto e:primes) {
        cout<<e<<' ';
    }
    return 0;
}
