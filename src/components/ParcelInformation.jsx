// Project files
import DataField from './DataField';
import FormattedTime from './FormattedTime';

export default function ParcelInformation({parcel}) {
    const {
        eta,
        last_updated,
        location_name,
        notes,
        verification_required: verify
    } = parcel || {};

    return (
      <div className="content-box">
        <DataField label={"Location"} text={location_name} />
        <DataField label={"ETA"} text={<FormattedTime dateString={eta} />} />
        <DataField
          label={"Last update"}
          text={<FormattedTime dateString={last_updated} />}
        />
        {notes && <DataField label={"Note"} text={notes} />}
        {verify && <DataField label={"Additional verification"} text={"Additional verification is required for this parcel"} />}
      </div>
    );
}

