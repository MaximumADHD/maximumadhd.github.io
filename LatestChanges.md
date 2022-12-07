## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/bb9eaaec2cf900cd1304d83cbce1e4012fdc2e12

## API Changes

```plain
Added Property bool ImporterRootSettings.AddModelToInventory
Added Property bool IncrementalPatchBuilder.AddPathsToBundle
Added Property Enum.RejectCharacterDeletions Workspace.RejectCharacterDeletions [NotScriptable]

Added Function string DataModel:GetPlaySessionId() {RobloxScriptSecurity}
Added Function void Model:AddPersistentPlayer(Player playerInstance = nil)
Added Function void Model:RemovePersistentPlayer(Player playerInstance = nil)
Added Function void TerrainRegion:ApplyTransform(CFrame rotation, Vector3 size) {RobloxScriptSecurity}

Added Enum RejectCharacterDeletions
	Added EnumItem RejectCharacterDeletions.Default : 0
	Added EnumItem RejectCharacterDeletions.Disabled : 1
	Added EnumItem RejectCharacterDeletions.Enabled : 2

Added EnumItem ModelStreamingMode.PersistentPerPlayer : 3

Added Tag [CustomLuaState] to Function HttpService:JSONDecode
Added Tag [Deprecated] to Function PhysicsService:CollisionGroupContainsPart
Added Tag [Deprecated] to Function PhysicsService:CreateCollisionGroup
Added Tag [Deprecated] to Function PhysicsService:GetCollisionGroupId
Added Tag [Deprecated] to Function PhysicsService:GetCollisionGroupName
Added Tag [Deprecated] to Function PhysicsService:GetCollisionGroups
Added Tag [Deprecated] to Function PhysicsService:RemoveCollisionGroup
Added Tag [Deprecated] to Function PhysicsService:SetPartCollisionGroup
Added Tag [NotCreatable] to Class Speaker
Added Tag [NotCreatable] to Class ChannelSelectorSoundEffect

Changed the value of EnumItem GraphicsMode.NoGraphics from 7 to 9
Changed the value of EnumItem Platform.None from 19 to 20

Removed Class VoiceChannel
	Removed Function VoiceChannel:AddUserAsync

Removed Event ScriptChangeService.ScriptSourceEdited

Removed Tag [Preliminary] from Class Speaker
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#555) for a syntax highlighted version!)