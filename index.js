
module.exports = function Broker(mod){

	mod.command.add(['broker'], { 
		$none() { mod.send('S_NPC_MENU_SELECT', 1, { type: 28 }); } 
	})

}