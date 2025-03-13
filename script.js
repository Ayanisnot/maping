class student {
 constructor(name) {
   this.studentName = name;
 }
  static hello() {
    return "hello";
  }
  Present() {
    return 'My Name is ' + this.studentName;
}
}
 class grade extends student {
        constructor(name,grade)   {
        super(name);
        this.studentgrade = grade;
    }
    show() {
        return this.Present() + ' . I read in ' + this.studentgrade;
    }
 }
 let mystudent = new grade ("Ayan" , "Class 8");
 document.getElementById("details").innerHTML = mystudent.show();
 
   

 