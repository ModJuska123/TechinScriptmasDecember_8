# 🎅 Calculate Santa’s Delivery Time 🎁

Get Santa’s delivery schedule in order! This program calculates how long Santa will take to deliver gifts to all houses and return to his cozy starting point at `[0, 0]`. The sleigh travels at a fixed speed, so let’s make sure those presents arrive on time! 🎄

---

## 📜 Task Description

Santa’s sleigh travels at a **fixed speed** (e.g., 10 km/h).  
Each house is located on a 2D grid with coordinates, and we calculate:
1. The **total distance** Santa covers to visit all houses.
2. The **total time** needed based on the sleigh's speed.

This ensures Santa’s journey is efficient and precise. 🚀

---

## 🔢 Features

- **Input**:  
  🎯 `houses`: A list of coordinates representing house locations.  
  🛷 `speed`: Sleigh speed in km/h.  

- **Output**:  
  ⏱️ Total delivery time in hours, including the return to `[0, 0]`.  

---

## ✨ Example

### Input:  
Houses: `[[1, 2], [3, 4], [5, 6]]`  
Speed: `10` km/h  

### Output:  
`1.57` hours (Santa’s total delivery time)  

---

## 🚀 How It Works

1. **Calculate Distance**:  
   - Uses the classic **Euclidean distance formula** to measure the journey from one point to another.

2. **Visit Each House**:  
   - Santa stops at each house in sequence, summing up the distances.

3. **Return Home**:  
   - Adds the distance from the last house back to `[0, 0]`.

4. **Calculate Time**:  
   - Divides the total distance by the sleigh’s speed to get time in hours.

5. **Precision**:  
   - Displays the time with **two decimal places** for accuracy.

---

## 🧪 Testing

🎯 **Sample Input**  
Houses: `[[1, 2], [3, 4], [5, 6]]`  
Speed: `10` km/h  

✅ **Expected Output**  
`1.57` hours  

---

## 📚 Key Formula

To calculate the distance between two points:  
\[
\text{distance} = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
\]

To calculate the time:  
\[
\text{time} = \frac{\text{distance}}{\text{speed}}
\]

---

## 🏷️ License

This project is **open-source** and available under the **MIT License**. 🎉  
Feel free to contribute, improve, or use this code in your own Santa-inspired projects. 🎄✨
