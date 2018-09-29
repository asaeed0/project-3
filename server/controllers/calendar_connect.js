function listAllEventsForToday() {
  var calendarId = "primary";
  var now = new Date();
  var startOfDay = new Date(
    now.getYear(),
    now.getMonth(),
    now.getDate(),
    0,
    0,
    0
  );
  var endOfDday = new Date(
    now.getYear(),
    now.getMonth(),
    now.getDate(),
    23,
    59,
    29
  );
  // console.log(startOfDay, endOfDday)
  var calendarEvents = Calendar.Events.list(calendarId, {
    timeMin: startOfDay.toISOString(),
    timeMax: endOfDay.toISOString(),
    singleEvents: true,
    orderBy: "startTime"
  });

  if (calendarEvents.items && calendarEvents.items.length > 0) {
    for (var i = 0; i < calendarEvents.items.length; i++) {
      var calendarEvent = calendarEvents.items[i];
      if (calendarEvent.start.date) {
        // All-day event.
        var start = parseDate(calendarEvent.start.date);
        Logger.log(
          "%s (%s)",
          calendarEvent.summary,
          start.toLocaleDateString()
        );
      } else {
        var start = parseDate(calendarEvent.start.dateTime);
        Logger.log("%s (%s)", calendarEvent.summary, start.toLocaleString());
      }
    }
  } else {
    Logger.log("No events found.");
  }
}
