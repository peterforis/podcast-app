export default function calculateDuration(durationMS) {
    const minutes = Math.floor(durationMS / 60000);
    const seconds = Math.floor((durationMS - 60000 * minutes) / 1000);
    const duration = minutes + ":" + seconds;
    return duration;
}