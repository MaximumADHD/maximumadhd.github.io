## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/c81e2760b725dacc0a31335f0ec42cc35780f1a6

## API Changes

```plain
Added Property Enum.AdPortalStatus AdPortal.PortalStatus [ReadOnly] [NotScriptable]

Added Function Enum.AccessoryType AvatarEditorService:GetAccessoryType(Enum.AvatarAssetType avatarAssetType)

Added Event VoiceChatInternal.LocalPlayerModerated() {RobloxScriptSecurity}

Added Enum AdPortalStatus
	Added EnumItem AdPortalStatus.Invalid : 0
	Added EnumItem AdPortalStatus.Inactive : 1
	Added EnumItem AdPortalStatus.Active : 2

Added Enum AdPortalType
	Added EnumItem AdPortalType.Forward : 0
	Added EnumItem AdPortalType.Return : 1

Changed the serialization of Property PackageLink.VersionNumber 
	from: [<🕒> RuntimeOnly]
	  to: [<📁> LoadOnly]

Changed the value-type of Property AdPortal.PortalType 
	from: Enum.PortalType
	  to: Enum.AdPortalType

Removed Property PackageLink.Package Id
Removed Property PackageLink.Version Number

Removed Enum PortalType
	Removed EnumItem PortalType.Forward
	Removed EnumItem PortalType.Return

Removed Tag [Hidden] from Property PackageLink.PackageId
Removed Tag [Hidden] from Property PackageLink.VersionNumber
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#544) for a syntax highlighted version!)