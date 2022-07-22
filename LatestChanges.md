## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/bd058a84761322b81b3e63190e7129c3cb5d4b7c

## API Changes

```plain
Added Class PatchMapping : Instance [NotCreatable] [NotReplicated]
	Added Property bool PatchMapping.FlattenTree
	Added Property string PatchMapping.PatchId
	Added Property string PatchMapping.TargetPath

Added Class RomarkSoundEffect : SoundEffect [NotCreatable]

Added Property bool ImporterMeshSettings.CageMeshIntersectedPreview
Added Property bool ImporterMeshSettings.CageMeshNotIntersected [ReadOnly]
Added Property bool ImporterMeshSettings.CageNonManifoldPreview
Added Property bool ImporterMeshSettings.CageOverlappingVerticesPreview
Added Property bool ImporterMeshSettings.CageUVMisMatchedPreview
Added Property bool ImporterMeshSettings.IrrelevantCageModifiedPreview
Added Property bool ImporterMeshSettings.MeshHoleDetectedPreview
Added Property bool ImporterMeshSettings.MeshNoHoleDetected [ReadOnly]
Added Property bool ImporterMeshSettings.NoIrrelevantCageModified [ReadOnly]
Added Property Enum.VolumetricAudio SoundService.VolumetricAudio [NotScriptable] [NotBrowsable]

Added Function bool AnimationFromVideoCreatorStudioService:IsAgeRestricted() {RobloxScriptSecurity}
Added Function Instance AssetImportSession:GetInstance(int nodeId) {RobloxScriptSecurity}

Added Enum VolumetricAudio
	Added EnumItem VolumetricAudio.Disabled : 0
	Added EnumItem VolumetricAudio.Automatic : 1
	Added EnumItem VolumetricAudio.Enabled : 2

Added EnumItem MeshPartDetailLevel.Level00 : 1

Added Tag [NotReplicated] to Property BasePart.CollisionGroupId

Added Tags [Hidden] [NotReplicated] to Property GuiService.CoreGuiNavigationEnabled

Changed the serialization of Property GuiService.CoreGuiNavigationEnabled 
	from: [<💾|📁> Saves|Loads]
	  to: [<🕒> RuntimeOnly]

Changed the parameters of Function ScriptDocument:GetLine 
	from: (int lineIndex = -1234567)
	  to: (int? lineIndex = nil)

Changed the parameters of Function ScriptDocument:GetText 
	from: (int startLine = -1234567, int startCharacter = -1234567, int endLine = -1234567, int endCharacter = -1234567)
	  to: (int? startLine = nil, int? startCharacter = nil, int? endLine = nil, int? endCharacter = nil)

Changed the security of Event VoiceChatInternal.StateChanged 
	from: {RobloxScriptSecurity}
	  to: 

Changed the value of EnumItem MeshPartDetailLevel.Level01 from 1 to 2
Changed the value of EnumItem MeshPartDetailLevel.Level02 from 2 to 3
Changed the value of EnumItem MeshPartDetailLevel.Level03 from 3 to 4
Changed the value of EnumItem MeshPartDetailLevel.Level04 from 4 to 5

Removed Property ImporterMeshSettings.CageManifoldPreview
Removed Property ImporterMeshSettings.CageNoOverlappingVerticesPreview
Removed Property ImporterMeshSettings.CageUVMatchedPreview
Removed Property MeshPart.MeshID
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#536) for a syntax highlighted version!)