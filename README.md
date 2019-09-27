﻿# Z-Wave.Me

This repository has moved. Please use https://github.com/priknr1/me.zwave to open up any new issues.

~~This app adds support for Z-Wave.Me devices to Homey.~~

~~Note! I created this app to add support for one of my devices.~~
~~Feel free to change it as you please! God bless open source software!~~



~~Currently supported devices:~~
~~* ZME_KFOB  - http://products.z-wavealliance.org/products/1282	Patrick van der Westen (pvdwesten at hotmail.com)~~
~~** # manufacturerId: 277, productTypeId: 256, productId: 259~~
~~* 064381  - http://www.pepper1.net/zwavedb/device/11	Patrick van der Westen (pvdwesten at hotmail.com)~~
~~** # manufacturerId: 100, productTypeId: 12289, productId: 0~~
~~* 064381_Out  - http://products.z-wavealliance.org/products/353	Patrick van der Westen (pvdwesten at hotmail.com)* WALLC-S_V2 - http://products.z-wavealliance.org/products/1086   Patrick van der Westen (pvdwesten at hotmail.com)~~
~~** # manufacturerId: 100, productTypeId: 0, productId: 0~~
~~* WALLC-S_V2 - http://products.z-wavealliance.org/products/1086   Patrick van der Westen (pvdwesten at hotmail.com)~~
~~** # manufacturerId: 340, productTypeId: 256, productId: 257~~
~~* WALLC-S - http://products.z-wavealliance.org/products/1086   Patrick van der Westen (pvdwesten at hotmail.com)~~
~~** # manufacturerId: 277, productTypeId: 256, productId: 257~~
~~* 054375  - http://www.pepper1.net/zwavedb/device/11	Patrick van der Westen (pvdwesten at hotmail.com)~~
~~** # manufacturerId: 100, productTypeId: 12289, productId: 0~~
~~* 064394  - http://www.pepper1.net/zwavedb/device/31	Patrick van der Westen (pvdwesten at hotmail.com)~~
~~** # manufacturerId: 100, productTypeId: 4096, productId: 0~~
~~* 064367  - http://www.pepper1.net/zwavedb/device/32	Patrick van der Westen (pvdwesten at hotmail.com)~~
~~** # manufacturerId: 100, productTypeId: 16385, productId: 0~~
~~* 054336  - http://www.pepper1.net/zwavedb/device/33	Patrick van der Westen (pvdwesten at hotmail.com)~~
~~** # manufacturerId: 100, productTypeId: 1, productId: 0~~
~~* 054336Z - http://www.pepper1.net/zwavedb/device/145	(In Drivers as ZME_05468)~~
~~** # manufacturerId: 277, productTypeId: 4096, productId: 2~~
~~* 05461   -	http://www.pepper1.net/zwavedb/device/564  	Robin van Kekem (nl.inversion@gmail.com)~~
~~** # manufacturerId: 277, productTypeId: 4096, productId: 256~~
~~* 054367Z - http://www.pepper1.net/zwavedb/device/119	Marco Frijmann (marco@frijmann.nl)~~
~~** # manufacturerId: 277, productTypeId: 4096, productId: 3~~
~~* 054313  -	http://www.pepper1.net/zwavedb/device/18~~
~~** # manufacturerId: 100, productTypeId: 4096, productId: 9~~
~~* 05431   -	http://www.pepper1.net/zwavedb/device/18~~
~~** # manufacturerId: 100, productTypeId: 8193, productId: 0~~
~~* 05457   -	http://www.pepper1.net/zwavedb/device/266~~
~~** # manufacturerId: 277, productTypeId: 4096, productId: 1 Patrick van der Westen (pvdwesten at hotmail.com)~~


~~Currently supported languages:~~
~~* English~~
~~* Dutch (Nederlands)~~
~~* German (Deutsch) - On a couple of devices~~


~~Additional information:~~
~~* Icons generated using: http://www.mobilefish.com/services/image2svg/image2svg.php~~
~~* Original source is com.fibaro project (https://github.com/athombv/com.fibaro)~~


~~Changelog:~~
~~0.1.0~~
~~* Added Device 05457 (built in switch)~~
~~* Shortend info text for KFOB, WALLC-S and WALLC-S_V2~~
~~* Corrected some Default settings for associations~~

~~0.0.15~~
~~* Added ZME_KFOB Keychain remote~~

~~0.0.14~~
~~* Changed images for plugin switches and plugin dimmer~~
~~* Added 064381_Out Plugin switch outdoor~~
~~* Battery status for WALLC-S was linked to WALLC-S_V2 in flow~~
~~* Removed 2 driver folders that where not in app.json (remains from older version)~~

~~0.0.13~~
~~* for WALLC-S: Fixed Send Result to flow and changed typo~~
~~* for WALLC-S_V2: Fixed Send Result to flow and changed typo ~~

~~0.0.12~~
~~* Fixed Copy/paste error in WALLC-S Driver~~
~~* Added support for the WALLC-S_V2 (same as WALLC-S different Manufacturer ID)~~


~~0.0.11~~
~~* Removed the 05433 device becaus it uses the same device ID als 054336Z~~
~~* Added comments to the code to have a beter overview of the used device ID's~~
~~* Updated to the newest zwave driver~~

~~0.0.10~~
~~* Added support for the WALLC-S~~
~~* Added 05433 as it seems to be a different device with the same identification information~~

~~0.0.9~~
~~* Removed double device (05433 - manufacturerId: 100 productTypeId:4096 productId: 9)~~

~~0.0.8~~
~~* Added support for the 054375~~
~~* Added support for the 064394~~
~~* Added support for the 064367~~
~~* Added support for the 054336~~
~~* Added support for the 05433~~
~~* Changed wrong link to pictures of 054367Z~~

~~0.0.7~~
~~* Updated to latest Z-Wave driver~~

~~0.0.6~~
~~* Added support for the 05458~~

~~0.0.5~~
~~* Added support for the 054313~~

~~0.0.4~~
~~* Added basic support for the 054367Z~~

~~0.0.3~~
~~* Added basic support for the 05461: Dual load switch~~

~~0.0.2~~
~~* Replaced a couple of icons, fixed a slider issue and removed the tinycolor2 package (since it's not used)~~

~~0.0.1~~
~~* First version~~
