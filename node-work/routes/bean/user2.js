class User{
    constructor(name,s1,s2,s3){
        this.name=name;
        this.s1=s1;
        this.s2=s2;
        this.s3=s3;
        this.amount=s1+s2+s3;
    }
}

let arr=Array.of(
    new User("李博康",90,90,90),
    new User("雾晨",80,80,80)
)