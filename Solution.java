
import java.util.Arrays;

public class Solution {

    public int coinChange(int[] coins, int amount) {
        int[] values = new int[amount + 1];
        Arrays.fill(values, amount + 1);
        values[0] = 0;
        for (int currentValue = 1; currentValue <= amount; ++currentValue) {
            for (int coin : coins) {
                if (coin <= currentValue) {
                    values[currentValue] = Math.min(values[currentValue - coin] + 1, values[currentValue]);
                }
            }
        }
        return values[amount] <= amount ? values[amount] : -1;
    }
}
