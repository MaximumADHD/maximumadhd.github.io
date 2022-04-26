## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/4e6c5b166b38e1d720f3ccc4695779f7da8f5d97

## API Changes

```plain
Added Property int GuiObject.SelectionOrder [NotBrowsable]
Added Property bool ImporterMeshSettings.Manifold [ReadOnly]

Added Function void Humanoid:ApplyDescriptionReset(HumanoidDescription humanoidDescription, Enum.AssetTypeVerification assetTypeVerification = "Default") [Yields]
Added Function Enum.PropertyStatus MaterialService:GetOverrideStatus(Enum.Material material) {RobloxScriptSecurity}

Added Event MaterialService.OverrideStatusChanged(Enum.Material material) {RobloxScriptSecurity}

Added EnumItem AccessoryType.Eyebrow : 18
Added EnumItem AccessoryType.Eyelash : 19
Added EnumItem AssetType.EyebrowAccessory : 76
Added EnumItem AssetType.EyelashAccessory : 77
Added EnumItem AvatarAssetType.EyebrowAccessory : 76
Added EnumItem AvatarAssetType.EyelashAccessory : 77
Added EnumItem BundleType.Shoes : 3

Added Tag [NotReplicated] to Property MaterialService.Use2022Materials

Changed the category of Property GuiObject.NextSelectionDown 
	from: "Behavior"
	  to: "Selection"

Changed the category of Property GuiObject.NextSelectionLeft 
	from: "Behavior"
	  to: "Selection"

Changed the category of Property GuiObject.NextSelectionRight 
	from: "Behavior"
	  to: "Selection"

Changed the category of Property GuiObject.NextSelectionUp 
	from: "Behavior"
	  to: "Selection"

Changed the category of Property GuiObject.Selectable 
	from: "Data"
	  to: "Selection"

Changed the serialization of Property MaterialService.Use2022Materials 
	from: [<💾|📁> Saves|Loads]
	  to: [<📁> LoadOnly]

Changed the parameters of Callback RemoteFunction.OnServerInvoke 
	from: (Instance player, Tuple arguments)
	  to: (Player player, Tuple arguments)

Removed Function StudioService:SerializeInstances

Removed Tag [Deprecated] from EnumItem Technology.Future
Removed Tag [NotBrowsable] from Property VoiceChatService.EnableDefaultVoice
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#524) for a syntax highlighted version!)