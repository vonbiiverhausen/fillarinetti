using System;

public interface ITuote{
	void HaeTuote();
	float YhteisArvo();
}
public class Tuote:ITuote{
	private string tuotteennimi;
	private float yksikkohinta;
	private int lukumaara;
	private float kokonaisarvo;
	
	public  Tuote(string tuotteennimi, float yksikkohinta, int lukumaara){
		this.tuotteennimi = tuotteennimi;
		this.yksikkohinta = yksikkohinta;
		this.lukumaara = lukumaara;
	}
	public void HaeTuote(){
		Console.WriteLine(tuotteennimi + yksikkohinta + lukumaara);
	}
	public float LaskeYhteisArvo(){
		this.kokonaisarvo = yksikkohinta * lukumaara;
		return this.kokonaisarvo;
	}
	public override string ToString(){
	   return tuotteennimi + yksikkohinta + lukumaara;
    }
}