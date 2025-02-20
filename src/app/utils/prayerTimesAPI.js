export async function getPrayerTimes(city) {
  try {
    const response = await fetch(
      `https://api.aladhan.com/v1/timingsByAddress?address=${city},Lebanon`
    );
    const data = await response.json();
    return data.data.timings; // Return only prayer timings
  } catch (error) {
    console.error("Error fetching prayer times:", error);
    return null;
  }
}

export async function getDate() {
  try {
    const response = await fetch(
      `https://api.aladhan.com/v1/timingsByAddress?address=Tripoli,Lebanon`
    );
    const data = await response.json();
    return data.data.date; // Return only prayer timings
  } catch (error) {
    console.error("Error fetching prayer times:", error);
    return null;
  }
}
