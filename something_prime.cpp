#include <bits/stdc++.h>

#define fast ios_base::sync_with_stdio(false),cin.tie(NULL),cout.tie(NULL);
#define el '\n'
#define ll  long long
#define ld  long double
#define all(x) x.begin(), x.end()
#define yes "YES\n"
#define no "NO\n"
#define test int test;cin>>test;while(test--)
using namespace std;


void solve() {
    int n;
    cin >> n;
    bool prime = true;
    vector<int> v,tmp;
    for (int i = 2; i * i <= n; ++i) {
        if (n % i == 0) {
            prime = false;
        }
    }
    cout<<(prime&&n>1?"prime\n":"not prime\n");

}


int32_t main() {
    fast
    test{
        solve();
    }
//    int n;
//    cin >> n;
//    vector<int> v,tmp;
//    for (int i = 2; i * i < n; ++i) {
//        if (n % i == 0) {
//            cout<<"not prime";
//            return 0;
//        }
//    }
//    cout<<"prime";
//    sort(v.begin(), v.end());
//    while(!tmp.empty()){
//        v.push_back(tmp.back());
//        tmp.pop_back();
//    }

//    ll sum = 0;
//    for (int x: v) {
//        cout << x << ' ';
//        if(x<n)sum+=x;
//    }
//    cout<<el<<sum;
    return 0;
}
