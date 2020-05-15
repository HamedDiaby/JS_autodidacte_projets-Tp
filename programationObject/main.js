class MusicPlayer
{
	constructor(format)
	{
		this.format = format;
	}

	getFormat()
	{
		return this.format;
	}
}

let  player = new MusicPlayer("Mp3");
document.write(player.format);