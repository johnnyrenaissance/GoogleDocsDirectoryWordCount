function myFunction() {  
  var list = [];
  list = getFiles();

  var count = 0;

  for (var i = 0; i < list.length; i++) {
    var space = " ";
    //Logger.log(list[i][1]);
    var doc = DocumentApp.openById(list[i][1]);
    var text = doc.getBody().getText();
    var words = text.replace(/\s+/g, space).split(space);
    //Logger.log(words.length);
    count += words.length;
    
    Logger.log(list[i][0] + ": " + words.length);
  }

  Logger.log(count);
}

function getFiles() {
  var folder = DriveApp.getFolderById('<put in your directory ID here>'); // Change the folder ID here
  var list = [];
  //list.push(['Name','ID','Size']);
  var files = folder.getFiles();
  while (files.hasNext()){
    file = files.next();
    var row = []
    row.push(file.getName(),file.getId(),file.getSize())
    list.push(row);6
  }

  return list;
}
