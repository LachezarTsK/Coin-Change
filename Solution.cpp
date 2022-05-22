
#include <vector>
using namespace std;

class Solution {
    
public:
    int coinChange(vector<int>& coins, int amount) {
        vector<int> values(amount + 1, amount + 1);
        values[0] = 0;
        for (int currentValue = 1; currentValue <= amount; ++currentValue) {
            for (const auto& coin : coins) {
                if (coin <= currentValue) {
                    values[currentValue] = min(values[currentValue - coin] + 1, values[currentValue]);
                }
            }
        }
        return values[amount] <= amount ? values[amount] : -1;
    }
};
